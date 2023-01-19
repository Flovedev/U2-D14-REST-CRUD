const url = "https://striveschool-api.herokuapp.com/api/product"

window.onload = async () => {
    await getEvents()
}

const getEvents = async () => {
    try {
        const options = {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5ODI3Y2U3MzczODAwMTUzNzQ2MGUiLCJpYXQiOjE2NzQxNTA1MjQsImV4cCI6MTY3NTM2MDEyNH0.a-axy8CgzTUS-HXNVlcNKHryqQRVcYCdw4l5_bOR_dg"
            },
        }

        const res = await fetch(url, options)
        const events = await res.json()
        console.log(events)
    } catch (error) {
        handleError(error)
    }
}

const renderEvents = (arrayOfEvents) => {
    const container = document.querySelector("#main-container")
    container.innerHTML = "test"
    arrayOfEvents.forEach((singleEvent) => {
        const { name, description, price, } = singleEvent
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
