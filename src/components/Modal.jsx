import { XCircleIcon } from '@heroicons/react/24/solid'

const ModalProps = {
  title: '',
  children: <div></div>,
  isOpen: false,
  onModalClose: () => {}
}

const Modal = ({
  children,
  title,
  isOpen,
  onModalClose
} = ModalProps) => {
  return isOpen && (
    <dialog className="bg-slate-950/70 fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center transition ease-in-out">
      <section className="bg-slate-600 w-1/2 p-4 rounded flex flex-col gap-2">
        <header className="flex flex-col gap-2">
          <span className="flex justify-end">
            <XCircleIcon onClick={onModalClose} className="w-8 h-8 text-slate-950" />
          </span>
          <h3 className="text-xl font-bold text-slate-200">{title}</h3>
        </header>

        {children}
      </section>
    </dialog>
  );
}
 
export default Modal;