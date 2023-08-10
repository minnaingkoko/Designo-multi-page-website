import { useState } from "react"
import "../contact.css"
import Button from "../../sharedComponents/ButtonComponent"
import error from "../../assets/contact/desktop/icon-error.svg"
const ContactForm = () => {
    const inputs = Array.from(document.querySelectorAll(".inputField"))

    /*  const intitialState = {
          fullname: "",
          emailAddress: "",
          phone: "",
          message: ""
      }
      const [formData, setFormData] = useState(intitialState)
      const onChangeHandler = (evt) => {
          const { name, value } = evt.target
          console.log(name, value)
          setFormData({ ...formData, [name]: value })
      }
      const submitForm = (evt) => {
          evt.preventDefault()
          console.log(FormData)
  
      }
      const { fullname, emailAddress, phone, message } = formData
  console.log(fullname)

  */
    inputs.forEach(input => {
       
        input.addEventListener("invalid", function () {
            input.previousSibling.classList.add("errorMsgShow")
            input.classList.remove("filledInput")
        })

        input.addEventListener("input", function () {
            if (input.validity.valid) {
                input.previousSibling.classList.remove("errorMsgShow")
                input.classList.add("filledInput")
            }
        })

    })
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhone, setNewPhone] = useState("")
    const [newMsg, setNewMsg] = useState("")
    const [newData, setNewData] = useState([])

    const onChangeName = (evt) => {
        console.log(evt.target.value)
        setNewName(evt.target.value)
    }
    const onChangeEmail = (evt) => {
        console.log(evt.target.value)
        setNewEmail(evt.target.value)
    }
    const onChangePhone = (evt) => {
        console.log(evt.target.value)
        setNewPhone(evt.target.value)
    }
    const onChangeMsg = (evt) => {
        console.log(evt.target.value)
        setNewMsg(evt.target.value)
    }
    const submitForm = (evt) => {
       
        inputs.forEach(input => {
            console.log(input)
            if(input.value.length <= 0) {
                input.previousSibling.classList.add("errorMsgShow")
            }
        })

        evt.preventDefault()
       
        const dataObj = {
            name: newName,
            email: newEmail,
            phone: newPhone,
            msg: newMsg,
            id: newData.length + 1
        }
        setNewData(newData.concat(dataObj))
        setNewName('')
        setNewEmail('')
        setNewPhone('')
        setNewMsg('')
        console.log(newData)
        alert("Thank you, form has been submitted successfully!")
        inputs.forEach(input => {
            input.classList.remove("filledInput")
        })
    }



    return (
        <div className="form__container">
            <form onSubmit={submitForm}>
                <div className="form__inputs">
                    <label className="contactDetails">
                        <span className="errorMsg" aria-hidden="true">Can't be empty <img src={error} alt="error message" /></span>
                        <input type="text" name="name" id="name" value={newName} className="inputField"
                            placeholder="Name" required onChange={onChangeName} />
                    </label>
                    <label className="contactDetails">
                        <span className="errorMsg" aria-hidden="true">Can't be empty <img src={error} alt="error message" /></span>
                        <input type="email" name="email" id="emailaddress" value={newEmail} className="inputField"
                            placeholder="Email address" required onChange={onChangeEmail} />
                    </label>
                    <label className="contactDetails">
                        <span className="errorMsg" aria-hidden="true">Can't be empty <img src={error} alt="error message" /></span>
                        <input type="tel" name="phone" id="phone" value={newPhone} className="inputField"
                            placeholder="Phone" required onChange={onChangePhone} />
                    </label>
                    <label className="contactDetails">
                        <span className="errorMsg" aria-hidden="true">Can't be empty <img src={error} alt="error message" /></span>
                        <textarea name="message" id="msg" cols="30" rows="2" value={newMsg} className="inputField"
                            placeholder="Your Message" onChange={onChangeMsg}></textarea>
                    </label>
                </div>

                <div className="btn__ctrl">
                    <Button title="Submit" />
                </div>

            </form>
        </div>
    )
}
export default ContactForm
