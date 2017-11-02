module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'hsla(0, 0%, 7%, 0.7)',
    opacity                    : '0',
    transition                 : 'opacity 0.4s',
    zIndex: '3',

  },
  content : {
    position                   : 'absolute',
    top                        : '60px',
    bottom                     : '50px',
    border                     : '1px solid #ccc',
    background                 : '#f3f5f9',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0',

    width                      : '480px',
    height                     : '600px',
    margin                     : '0 auto',

    opacity                    : '0',
    transition                 : 'opacity 0.4s',

    zIndex: '4',
  }
}
