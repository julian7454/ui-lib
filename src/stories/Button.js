import './button.scss';

const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  animate,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const animateClass = animate ? 'storybook-button--animate' : '';
  btn.className = ['storybook-button', `storybook-button--${size}`, mode, animateClass].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};

const animateButton = (() => {
  document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.storybook-button--animate')?.addEventListener('mouseleave', e => {
          const button = e.target;
          // @ts-ignore
          button?.classList.add('mouse-leave');

          function removeAnimationClass() {
             // @ts-ignore
            button?.classList.remove('mouse-leave');
          }

          button?.addEventListener('webkitAnimationEnd', removeAnimationClass);
          button?.addEventListener('animationend', removeAnimationClass);
          button?.addEventListener('oanimationend', removeAnimationClass);
      });
  });



})

export {
  createButton,
  animateButton
}