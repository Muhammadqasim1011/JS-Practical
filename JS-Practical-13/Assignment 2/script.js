let main = document.getElementById('main');

main.innerHTML = ''; //Empty the main container by default, commment it to observe

let contentDiv = document.createElement('div');
contentDiv.innerHTML = `
        <h3>The text is append</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, esse suscipit. Autem, ad animi iusto minima quasi ea unde consectetur distinctio voluptatum in est enim ipsum perspiciatis quam voluptates quisquam.</p>`;
main.appendChild(contentDiv); //comment it to observe
