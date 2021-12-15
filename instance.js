const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'SANDUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'MANAUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'ADAUSDT',
    exchange: 'binance_futures',
    periods: ['5m','15m', '1h'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'XLMUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'GALAUSDT',
    exchange: 'binance_futures',
    periods: ['5m','15m', '1h'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'MATICUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
   },
  {
    symbol: 'SUSHIUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'CTKUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'KEEPUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'NEARUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'ENJUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'REEFUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: '1000SHIBUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'BAKEUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
        {
          strategy: 'dip_catcher',
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
        stop_percent: 10.0
      }
    ]
  }
];

