const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'SANDUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'MANAUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'XLMUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'GALAUSDT',
    exchange: 'binance_futures',
    periods: ['5m','1m', '1h'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'MATICUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
   },
  {
    symbol: 'CTKUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'KEEPUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'NEARUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'ENJUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'REEFUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: '1000SHIBUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'BAKEUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'DODOUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'EOSUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'BNBUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 1,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'TRXUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'DOGEUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'ADAUSDT',
    exchange: 'binance_futures',
    periods: ['1m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'macd',
          interval: '1m',
          options: {
            period: '1m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2,
        stop_percent: 10.0
      }
    ]
  }
];

