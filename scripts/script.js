const url = "https://striveschool-api.herokuapp.com/api/product/"

window.onload = async () => {
    await getEvents()
}

const getEvents = async () => {
    try {

        const options = {
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2ZlY2U3MzczODAwMTUzNzQzOWUiLCJpYXQiOjE2NzQxMzM0ODQsImV4cCI6MTY3NTM0MzA4NH0.hFgMDgexrYTeLmmNmn9RaClX_VSWRtSTzkJJU_3gsgE"
            }),
        }

        const res = await fetch(url, options)
        const events = await res.json()
        renderEvents(events)
    } catch (error) {
        handleError(error)
    }
}

const renderEvents = (arrayOfEvents) => {
    const container = document.querySelector("#main-container")
    container.innerHTML = ""
    arrayOfEvents.forEach((singleEvent) => {
        const { name, description, time, price, _id } = singleEvent
        ul.innerHTML += `test,${name}`
    })
}

const deleteEvent = async (idToDelete) => {
    //add confirmation
    try {
        let res = await fetch(url + "/" + idToDelete, {
            method: "DELETE",
        })
        console.log(res)
        if (res.ok) {
            await getEvents()
        }
    } catch (error) {
        handleError(error)
    }
}

const handleError = (errorText) => {
    console.log(errorText)
    // const alert = document.querySelector(".alert span.alert-text")
    // console.log(alert)
    // alert.innerText = errorText
    // alert.parentElement.classList.replace("d-none", "d-block")
}
