module.exports = {
    identifier: "dashboard",
    header: "Dashboard",
    pageTitle: "Home",
    default: true,
    mType: "visual", // visual , listing 
    items: [{
            type: "slideshow",
            display: {
                ratio: "5:1",
                autoplay: true,
                autoplay_interval: 3000,
                theme: "light"
            },
            items: [{
                    link: "../../../assets/images/one.jpg",
                    height: "",
                    width: ""
                },
                {
                    link: "../../../assets/images/two.jpg",
                    height: "",
                    width: ""
                }
            ]
        },
        { // this should be replace by the db call and take from the product manager
            //later movie this code to smaller modulecomponent
            type: "slider-card",
            display: {},
            items: [{
                    src: "https://getuikit.com/docs/images/photo.jpg",
                    header: "headerOne",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/dark.jpg",
                    header: "headerOne",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/light.jpg",
                    header: "headerOne",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/photo2.jpg",
                    header: "headerOne",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    src: "https://getuikit.com/docs/images/photo3.jpg",
                    header: "headerOne",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                }
            ]

        },
    ]
}