import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'CheckBalance' : () => Promise<number>,
  'Compound' : () => Promise<undefined>,
  'TopUp' : (arg_0: number) => Promise<undefined>,
  'Withdraw' : (arg_0: number) => Promise<undefined>,
}
