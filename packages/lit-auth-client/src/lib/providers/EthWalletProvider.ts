import {
  AuthMethod,
  AuthSig,
  BaseProviderOptions,
  EthWalletProviderOptions,
  EthWalletAuthenticateOptions,
} from '@lit-protocol/types';
import { LIT_CHAINS, AuthMethodType } from '@lit-protocol/constants';
import { SiweMessage } from 'lit-siwe';
import { ethers } from 'ethers';
import { BaseProvider } from './BaseProvider';
import { checkAndSignAuthMessage } from '@lit-protocol/lit-node-client';

export default class EthWalletProvider extends BaseProvider {
  /**
   * The domain from which the signing request is made
   */
  public domain: string;
  /**
   * The origin from which the signing request is made
   */
  public origin: string;

  constructor(options: BaseProviderOptions & EthWalletProviderOptions) {
    super(options);
    this.domain = options.domain || window.location.hostname;
    this.origin = options.origin || window.location.origin;
  }

  /**
   * Generate a wallet signature to use as an auth method
   *
   * @param {EthWalletAuthenticateOptions} options
   * @param {string} [options.address] - Address to sign with
   * @param {function} [options.signMessage] - Function to sign message with
   * @param {string} [options.chain] - Name of chain to use for signature
   * @param {number} [options.expiration] - When the auth signature expires
   *
   * @returns {Promise<AuthMethod>} - Auth method object containing the auth signature
   */
  public async authenticate(
    options?: EthWalletAuthenticateOptions
  ): Promise<AuthMethod> {
    const address = options?.address;
    const signMessage = options?.signMessage;
    const chain = options?.chain || 'ethereum';

    let authSig: AuthSig;

    if (address && signMessage) {
      // Get chain ID or default to Ethereum mainnet
      const selectedChain = LIT_CHAINS[chain];
      const chainId = selectedChain?.chainId ? selectedChain.chainId : 1;

      // Get expiration or default to 24 hours
      const expiration =
        options?.expiration ||
        new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString();

      // Prepare Sign in with Ethereum message
      const preparedMessage: Partial<SiweMessage> = {
        domain: this.domain,
        uri: this.origin,
        address: ethers.utils.getAddress(address), // convert to EIP-55 format or else SIWE complains
        version: '1',
        chainId,
        expirationTime: expiration,
      };

      const message: SiweMessage = new SiweMessage(preparedMessage);
      const toSign: string = message.prepareMessage();

      // Use provided function to sign message
      const signature = await signMessage(toSign);

      authSig = {
        sig: signature,
        derivedVia: 'web3.eth.personal.sign',
        signedMessage: toSign,
        address: address,
      };
    } else {
      authSig = await checkAndSignAuthMessage({
        chain,
      });
    }

    const authMethod = {
      authMethodType: AuthMethodType.EthWallet,
      accessToken: JSON.stringify(authSig),
    };
    return authMethod;
  }

  /**
   * Get auth method id that can be used to look up and interact with
   * PKPs associated with the given auth method
   *
   * @param {AuthMethod} authMethod - Auth method object
   *
   * @returns {Promise<string>} - Auth method id
   */
  public async getAuthMethodId(authMethod: AuthMethod): Promise<string> {
    let address: string;

    try {
      address = JSON.parse(authMethod.accessToken).address;
    } catch (err) {
      throw new Error(
        `Error when parsing auth method to generate auth method ID for Eth wallet: ${err}`
      );
    }

    return address.toLowerCase();
  }
}
