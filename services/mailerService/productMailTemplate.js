
const mail = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'Bienvenido a Apple Store',
    text: 'Te has registrado correctamente. Ya puedes obtener tus productos'
}

mailerService.transport.sendMail(mail, (error,info) =>{
    if(error){
        console.log('No se pudo enviar el mensaje')
    }
    else{
        console.log('Mensaje enviado con exito')
    }
})

module.exports = {productCreatedTemplate}