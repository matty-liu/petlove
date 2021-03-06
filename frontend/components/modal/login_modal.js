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

  },
  content : {
    position                   : 'absolute',
    top                        : '100px',
    bottom                     : '130px',
    border                     : '1px solid #ccc',
    background                 : '#f3f5f9',
    overflow                   : 'hidden',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',

    width                      : '290px',
    height                     : '400px',
    margin                     : '0 auto',

    opacity                    : '0',
    transition                 : 'opacity 0.4s',
  }
}
