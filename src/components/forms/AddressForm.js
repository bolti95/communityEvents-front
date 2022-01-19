
function AddressForm(props) {
    // function onChange (e) {
    //     let name = e.target.name ;
    //     let value = e.target.value;
    //     setFormData({ ...formData, [name]: value });
    //     console.log(formData)
    // }
    // const address = {
    //     streetAddress: formData.streetAddress,
    //     city: formData.city,
    //     region: formData.region,
    //     postcode: formData.postcode

    // }

        // useEffect(() => {
        //     return () => {
        //     console.log(formData.streetAddress)
        //     }
        // })

      return (
        <>
            <label>
                Venue
            </label>
            <input
                name={"venue"} 
                placeholder={"Venue"} 
                type={"text"}
                onChange={props.onChange}
                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <label>
                Street Address
            </label>
            <input
                name={"streetAddress"} 
                placeholder={"Street Address"} 
                type={"text"}
                onChange={props.onChange}
                // onChange={(e) => setFormData({ ...formData, firstName: e.target.value})}
            />
            <label>
                City
            </label>
            <input
                name={"city"} 
                placeholder={"City"} 
                type={"text"}
                onChange={props.onChange}
            />
            <label>
                Region
            </label>
            <input
                name={"region"} 
                placeholder={"region"} 
                type={"text"}
                onChange={props.onChange}
            />
            <label>
                Postcode
            </label>
            <input
                name={"postcode"} 
                placeholder={"postcode"} 
                type={"text"}
                onChange={props.onChange}
            />

        </>

      );
  }
  
  export default AddressForm;