const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

const getInputValue = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== '') {
        refs.nameLabel.textContent = currentTarget.value.trim();
    } else {
        refs.nameLabel.textContent = 'Anonymous';
    }
};

refs.input.addEventListener('input', getInputValue);


