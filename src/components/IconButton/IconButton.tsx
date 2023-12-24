import './IconButton.style.sass';

export function IconButton({ buttonClass }: { buttonClass: string }) {
  return (
    <>
      <button className={`button button_${buttonClass}`} type="button" />
    </>
  );
}
