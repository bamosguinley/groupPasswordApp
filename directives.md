-mise en place du composant form
- mise en place du composant de verification 
- mise en place du formulaire avec des [formControl]="";
- mise en place du script du formulaire avec les new FormControl 
- envoie du formcontrol du password au composant parent 
- envoi du password du compant parent a la page de vérification 
- conditionnement du style et de l'affichage des messages d'erreur en fonction du password validator. Par exemple si le required du password est validé :
 password.errors?.['required'].
 ......

 rules de validation :  [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]