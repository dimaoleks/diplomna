

let initialState = {
    imagesSlider: [
        { url: "https://goldentur.com/wp-content/uploads/2019/12/etiqa-og-travel.jpg" },
        { url: "https://i.pinimg.com/originals/f4/67/7f/f4677fa2bb6d6249ac27d793eec2a0a3.jpg" },
        { url: "https://how.travel/wp-content/uploads/2019/05/ce-travel1.jpg" },
        { url: "https://i.pinimg.com/originals/32/29/5c/32295cc5004b2a108f97655d3b1eec73.jpg" },
        { url: "https://i.pinimg.com/originals/3d/36/6a/3d366a30f831c3721ca0739e68edfe86.jpg" },
        { url: "https://wallpaperaccess.com/full/449167.jpg" },
        { url: "https://i.pinimg.com/originals/e6/5e/c4/e65ec48971139b613bf60bfd5681e1b3.jpg" }
    ]
};

const mainpageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainpageReducer;