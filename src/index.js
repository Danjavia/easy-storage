import store from 'store2'
import _ from 'underscore'

class SHelper {

    update ( ...args ) {

        if ( args.length > 2 ) {

            try {

                if ( store.has( args[ 0 ] ) ) {

                    let data = JSON.parse( store.get( args[ 0 ] ) )

                    data[ args[ 1 ] ] = args[ 2 ]

                    store.set( args[ 0 ], JSON.stringify( data ) )

                    return true
                }

                else {
                    let data = {}

                    data[args[ 1 ]] = args[ 2 ]

                    store.set( args[ 0 ], JSON.stringify( data ) )
                }


            } catch( e ) {

                // statements
                console.log( `You has the following error:  ${ e }` )
            }
        }

        else {

            if ( store.has( args[ 0 ] ) ) {

                let data = JSON.parse( store.get( args[ 0 ] ) )

                // let newState = Object.assign( data, args[ 1 ] )
                let newState = _.extend( data, args[ 1 ] )

                store.set( args[ 0 ], JSON.stringify( newState ) )
            }

            else {
                let data = args[ 1 ]

                store.set( args[ 0 ], JSON.stringify( data ) )
            }
        }
    }

    log ( entity ) {
        let logData = JSON.parse( store.get( entity ) )
        debugger
    }

    has ( entity ) {
        return store.has( entity ) ? true : false
    }

    get ( entity ) {
        return JSON.parse( store.get( entity ) )
    }
}

export default new SHelper()
