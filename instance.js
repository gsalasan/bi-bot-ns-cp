const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'MANAUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
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
        target_percent: 0.5,
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
        target_percent: 0.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'DODOUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
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
        target_percent: 0.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'BNBUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
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
        target_percent: 0.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'NEOUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
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
        target_percent: 0.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'ADAUSDT',
    exchange: 'binance_futures',
    periods: ['15m'],
    trade: {
      currency_capital: 100,
      strategies: [
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
        target_percent: 0.5,
        stop_percent: 10.0
      }
    ]
  }
];

