import { useState } from "react"
import Button from "../../ui/Button"

const initialState = { fname: "", lname: "", phone: "", email: "", message: "" }

const MemberContactForm = () => {

  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setValues((v) => ({
      ...v,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.fname || !values.lname || !values.phone || !values.email) {
      setStatus("error")
      return
    }
    setStatus("success");
    setValues(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit} onValidation className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
          />
          <input
            type="text"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
          />
        </div>
        <input
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className="w-full rounded-full border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
        />
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Message"
          required
          className="w-full rounded-2xl border border-divider bg-transparent px-4 py-3 text-sm text-primary placeholder:text-body focus:border-accent focus:outline-none"
        />
        <Button type="submit" variant="highlighted" >
          Submit message
        </Button>
        {status === "success" && <p className="mb-0 text-sm font-bold text-accent">Message Sent Successfully</p>}
        {status === "error" && <p className="mb-0 text-sm font-bold text-error">Message Failed to Send</p>}
      </form>
    </>
  )
}

export default MemberContactForm