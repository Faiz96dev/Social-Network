const GET_FRIENDS = "GET_FRIENDS";

let initialState = {
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
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS: {

            return state;
        }

        default:
            return state;

    }
};

export const GetFirendsList = () => ({ type: GET_FRIENDS });


export default sidebarReducer;
