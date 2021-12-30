const c = (module.exports = {});

c.symbols = []

let z = [
 'SANDUSDT', 'GALAUSDT', 'SFPUSDT', 'NEARUSDT', 'IOTAUSDT', 'ARUSDT' , 'EOSUSDT', 'ETCUSDT', 'LINKUSDT'
]

z.forEach((pair) => {
    c.symbols.push({
        symbol: pair,
        periods: ['5m', '15m','1h'],
        exchange: 'binance_futures',
        trade: {
            currency_capital: 100,
            strategies: [
                {
                    strategy: 'cci',
                    interval: '15m',
                    options: {
                        period: '15m'
                    }
                },
                {
                  strategy: 'cci_macd',
                  interval: '15m',
                  options: {
                      period: '15m'
                  }
                },
                {
                    strategy: 'obv_pump_dump',
                    interval: '15m',
                },
                {
                    strategy: 'noop',
                    interval: '15m',
                    options: {
                        period: '15m'
                    }
                }
            ]
        },
        watchdogs: [
        {
            name: 'risk_reward_ratio',
            target_percent: 1,
            stop_percent: 1.5
        }
        ]
    })
})


// const c = (module.exports = {});

// c.symbols = [
//   {
//     symbol: 'DOGEBUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 2.5,
//         stop_percent: 5
//       }
//     ]
//   },
//   {
//     symbol: 'XRPBUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 1,
//         stop_percent: 5
//       }
//     ]
//   },
//   {
//     symbol: 'FTTBUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 2.5,
//         stop_percent: 5
//       }
//     ]
//   },
//   {
//     symbol: 'BNBBUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 2.5,
//         stop_percent: 5
//       }
//     ]
//   },
//   {
//     symbol: 'ETHBUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 1,
//         stop_percent: 5
//       }
//     ]
//   },
//   // {
//   //   symbol: 'DOTUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     currency_capital: 100,
//   //     strategies: [
//   //       {
//   //         strategy: 'noop',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 2.5,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // },
//   {
//     symbol: 'ADABUSD',
//     exchange: 'binance_futures',
//     periods: ['15m'],
//     trade: {
//       currency_capital: 100,
//       strategies: [
//         {
//           strategy: 'macd',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         },
//         {
//           strategy: 'noop',
//           interval: '15m',
//           options: {
//             period: '15m'
//           }
//         }
//       ]
//     },
//     watchdogs: [
//       {
//         name: 'risk_reward_ratio',
//         target_percent: 2.5,
//         stop_percent: 5
//       }
//     ]
//   }//,
//   // {
//   //   symbol: 'ETCUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     currency_capital: 100,
//   //     strategies: [
//   //       {
//   //         strategy: 'macd',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 1,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // },
//   // {
//   //   symbol: 'LTCUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     currency_capital: 200,
//   //     strategies: [
//   //       {
//   //         strategy: 'macd',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 1,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // },
//   // {
//   //   symbol: 'SUSHIUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     currency_capital: 100,
//   //     strategies: [
//   //       {
//   //         strategy: 'noop',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 2.5,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // },
//   // {
//   //   symbol: 'AXSUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     capital: 1,
//   //     strategies: [
//   //       {
//   //         strategy: 'noop',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 2.5,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // },
//   // {
//   //   symbol: 'LUNAUSDT',
//   //   exchange: 'binance_futures',
//   //   periods: ['15m'],
//   //   trade: {
//   //     currency_capital: 100,
//   //     strategies: [
//   //       {
//   //         strategy: 'macd',
//   //         interval: '15m',
//   //         options: {
//   //           period: '15m'
//   //         }
//   //       }
//   //     ]
//   //   },
//   //   watchdogs: [
//   //     {
//   //       name: 'risk_reward_ratio',
//   //       target_percent: 1,
//   //       stop_percent: 5
//   //     }
//   //   ]
//   // }

// ];
