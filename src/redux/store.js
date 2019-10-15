import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        sidebar: {
            navFriendsData: [
                {
                    name: "Ivan",
                    url:
                        "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"
                },
                {
                    name: "Oleg",
                    url:
                        "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"
                },
                {
                    name: "Artur",
                    url:
                        "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"
                },
                {
                    name: "Faiz",
                    url:
                        "https://wpjournalist.nl/wp-content/uploads/2019/03/avatar-jongen-voorbeeld-1.jpg"
                }
            ]
        },

        profilePage: {
            posts: [
                { id: 1, message: "widwidmwdm", likeCount: 4 },
                { id: 2, message: "widw", likeCount: 1 },
                { id: 3, message: "wvkla ef", likeCount: 39 },
                { id: 4, message: "widwidffrfrfrf", likeCount: 4 }
            ],
            newPostText: "new Text"
        },

        messagePage: {
            dialogsData: [
                { id: 1, name: "Victor" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Valera" },
                { id: 4, name: "Victor" },
                { id: 5, name: "Victor" },
                { id: 6, name: "Victor" }
            ],

            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "lornm" },
                { id: 3, message: "Vadqwdwdwqa" },
                { id: 4, message: "Vcasmcld  mwd wd " },
                { id: 5, message: "wd2hlam byeb " },
                { id: 6, message: "wqdoi  uwdnn" }
            ],
            newMessageBody: "ывыв"
        }
    },
    _callSubscriber() {
        console.log("State Updated");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.messagePage =  dialogsReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);

    }
};


export default store;
