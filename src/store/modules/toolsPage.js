const toolsPage =  {
    namespaced: true,
    state: {
        toolsList: [],
        activeToolsKey: '',
    },
    getters: {
        get_toolsList(state){
            return state.toolsList;
        },
        get_activeToolsKey(state){
            return state.activeToolsKey;
        },
        get_activeTools(state) {
            let config = null;
            for(let i=0; i<state.toolsList.length; i++){
                if( state.toolsList[i].key == state.activeToolsKey ){
                    config = state.toolsList[i];
                }else if( 'cols' in state.toolsList[i] ){
                    config = state.toolsList[i].cols.find(item => item.key == state.activeToolsKey) || null;
                }

                if( config !== null) break;
            }

            return config;
        }
    },
    mutations: {
        set_toolsList(state, data){
            state.toolsList = data;
        },
        update_toolsList(state, data){
            let index = state.toolsList.findIndex(item => item.key == data.key);
            state.toolsList.splice(index, 1, data);
            // Object.assign(state.toolsList, data);
        },
        add_toolsList(state, data){
            state.toolsList.push(data);
        },
        set_activeToolsKey(state, data){
            state.activeToolsKey = data;
        },
    },
    actions: {},
};

export default toolsPage;
