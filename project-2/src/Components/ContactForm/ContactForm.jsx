import styles from './ContactForm_module.css'

const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button 
                text="VIA SUPPORT CHAT"
                icon={<MdMessage fontSize="24px" />}
                />
            </div>
        </div>
    </section>

  )
}

export default ContactForm
