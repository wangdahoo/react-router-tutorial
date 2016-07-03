export default  {
  path: 'repos',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Repos').default)
    })
  }
}