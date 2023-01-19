const url = "https://striveschool-api.herokuapp.com/api/product/"

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
                let { name } = await res.json()
                // let { name, description, brand, price, createdAt, updatedAt } = await res.json()
                document.querySelector("#eventName").value = name
                // document.querySelector("#eventDescription").value = description
                // document.querySelector("#eventBrand").value = brand
                // // document.querySelector("#eventImg").value = imgUrl
                // document.querySelector("#eventPrice").value = price
                // // document.querySelector("#eventUserId").value = userId
                // document.querySelector("#eventCreatedAt").value = createdAt.replace(".000Z", "")
                // document.querySelector("#eventUpdatedAt").value = updatedAt.replace(".000Z", "")
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
        submitEvent.preventDefault()
        const eventToSend = {
            name: document.querySelector("#eventName").value,
            // desciption: document.querySelector("#eventDescription").value,
            // brand: document.querySelector("#eventBrand").value,
            // // imgUrl: document.querySelector("#eventImg").value,
            // price: document.querySelector("#eventPrice").value,
            // // userId: document.querySelector("#eventUserId").value,
            // createdAt: document.querySelector("#eventCreatedAt").value,
            // updatedAt: document.querySelector("#eventUpdatedAt").value
        }
        const options = {
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2ZlY2U3MzczODAwMTUzNzQzOWUiLCJpYXQiOjE2NzQxMzM0ODQsImV4cCI6MTY3NTM0MzA4NH0.hFgMDgexrYTeLmmNmn9RaClX_VSWRtSTzkJJU_3gsgE"
            }),
            body: JSON.stringify(eventToSend)
        }
        let finalURL = url
        if (id === null) {
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

        console.log(res.ok)
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