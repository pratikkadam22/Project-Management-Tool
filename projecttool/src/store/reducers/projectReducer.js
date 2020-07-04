
const initState = {
    projects: [
        {id: '1', title: 'first', content: 'first project'},
        {id: '2', title: 'second', content: 'second project'},
        {id: '3', title: 'third', content: 'third project'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
    }
    return state
}

export default projectReducer