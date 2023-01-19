const url = "https://striveschool-api.herokuapp.com/api/product"

const params = new URLSearchParams(location.search)
const id = params.get("id")
console.log(id)

window.onload = async () => {
    try {
        if (id !== null) {

            const postButton = document.querySelector(".btn-primary")
            postButton.remove()

            let res = await fetch(url + "/" + id)

            if (res.ok) {
                let { name, description, brand, imgUrl, price } = await res.json()
                document.querySelector("#eventName").value = name
                document.querySelector("#eventDescription").value = description
                document.querySelector("#eventBrand").value = brand
                document.querySelector("#eventImg").value = imgUrl
                document.querySelector("#eventPrice").value = price


            } else {
                console.log(res)
                throw res.status + " " + res.statusText
            }
        } else {
            const putButton = document.querySelector(".btn-success")
            putButton.remove()
        }

    } catch (error) {
        handleError(error)
    }
}

const handleBackoffice = async (submitEvent) => {
    try {

        const eventToSend = {
            name: "flo",
            description: "otor",
            brand: "loco",
            imageUrl: `https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80`,
            price: "1"
            // name: document.querySelector("#eventName").value,
            // desciption: document.querySelector("#eventDescription").value,
            // brand: document.querySelector("#eventBrand").value,
            // imgUrl: `https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80`,
            // price: document.querySelector("#eventPrice").value,

        }
        const options = {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5ODI3Y2U3MzczODAwMTUzNzQ2MGUiLCJpYXQiOjE2NzQxNTA1MjQsImV4cCI6MTY3NTM2MDEyNH0.a-axy8CgzTUS-HXNVlcNKHryqQRVcYCdw4l5_bOR_dg"
            },
            body: JSON.stringify(eventToSend)
        }
        let finalURL = url
        if (id == null) {
            options.method = "POST"
        } else {
            finalURL += `/${id}`
            options.method = "PUT"
        }
        const res = await fetch(finalURL, options)

        if (res.ok) {
            successAlert()
        } else {
            throw res.status + " " + res.statusText
        }


    } catch (error) {
        handleError(error)
    }
}

const handleError = (errorText) => {
    console.log(errorText)
    // const alert = document.querySelector(".alert span.alert-text")
    // alert.innerText = errorText
    // alert.parentElement.classList.replace("d-none", "d-block")
}

const successAlert = (successText) => {
    console.log(successText)
    // const alert = document.querySelector(".alert-success")
    // alert.classList.add("show")
    // alert.classList.remove("d-none")
}
const product = () => {
    let product = {
        name: document.querySelector("#eventName").value
    };
    postData(product)
}

const handleNewEvent = async () => {


    // const name = document.querySelector("#eventName").value
    // const description = document.querySelector("#eventDescription").value
    // const time = document.querySelector("#eventTime").value
    // const price = document.querySelector("#eventPrice").value
    // const newEvent = { name }

    let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2ZlY2U3MzczODAwMTUzNzQzOWUiLCJpYXQiOjE2NzQxNDQ2MDcsImV4cCI6MTY3NTM1NDIwN30.n-QeZweKSqJg-GnXI96eJkGIWqes0-Y9aKu-R-dqMsY",
            "Content-Type": "application/json",
        },
    })



}
