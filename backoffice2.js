const url = "https://striveschool-api.herokuapp.com/api/product"


const postLuck = async () => {
    let testing = {
        "name": "app test 1",  //REQUIRED
        "description": "somthing longer", //REQUIRED
        "brand": "nokia", //REQUIRED
        "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
        "price": 100, //REQUIRED
    }
    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(testing),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5ODI3Y2U3MzczODAwMTUzNzQ2MGUiLCJpYXQiOjE2NzQxNTA1MjQsImV4cCI6MTY3NTM2MDEyNH0.a-axy8CgzTUS-HXNVlcNKHryqQRVcYCdw4l5_bOR_dg"
        },
    })
    console.log(res)
}