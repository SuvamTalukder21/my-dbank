export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'CheckBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'Compound' : IDL.Func([], [], ['oneway']),
    'TopUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'Withdraw' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
