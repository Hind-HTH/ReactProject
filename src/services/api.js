//recuperer les utilisateurs:
const postUsers= async (formData)=>{

    const requestInfos = new Request('http://localhost:3000/users', {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    // const request = await est obligatoire apres les requettes http + async.

    //attender pour envoyer la requette:
    const request = await fetch(requestInfos);
    //attender pour recevoir la reponse de la requette:
    const response = await request.json();
    return response;

};

export { postUsers};