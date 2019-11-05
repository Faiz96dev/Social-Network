import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, message: "widwidmwdm", likeCount: 4},
        {id: 2, message: "widw", likeCount: 1},
        {id: 3, message: "wvkla ef", likeCount: 39},
        {id: 4, message: "widwidffrfrfrf", likeCount: 4}
    ],
    profile: null,
    status: ''
};

it('new post added', () =>{
    let action = addPostActionCreator("qwert")

    let newState = profileReducer(state,action)
    expect(newState.posts.length) .toBe(5)
})

it('new massage added', () =>{
    let action = addPostActionCreator("widwidffrfrfrf")

    let newState = profileReducer(state,action)
    expect(newState.posts[4].message) .toBe('widwidffrfrfrf')
})

it('Post deleted success', () =>{
    let action = deletePost(1)

    let newState = profileReducer(state,action)
    expect(newState.posts.length) .toBe(3)
})

it('On post not valid ID', () =>{
    let action = deletePost(20000)

    let newState = profileReducer(state,action)
    expect(newState.posts.length) .toBe(4)
})
