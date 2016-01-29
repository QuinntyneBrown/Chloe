class AppComponent {

}

ngX.Component({
    component: AppComponent,
    selector: "app",
    templateUrl: "app/components/app.html",
    styles: `
* {
    font-family: 'Lato', sans-serif;
    color: #333;
    margin:0;
    padding:0;
}

a, a:focus, a:visited, a:hover {
    text-decoration: none;
    color: #333;
}

h1 {
    line-height:2.0em;
}

h2 {
    line-height:1.5em;
}

body {
    padding-left:30px;
    padding-top:30px;
}

button {
    width:8em;
    height:2.5em;
    font-size:1em;
    border: none;
    cursor:pointer;
}

label {
    line-height:2em;
}

button {
    text-transform: uppercase;
}

input {
    line-height:2.5em;
    padding-left:5px;
    margin-right:10px;
}

input[type='text'] {
    height:40px;
    padding-left:5px;
    width:200px;
}

`
});