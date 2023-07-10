import { Listbox, Transition } from "@headlessui/react";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

interface Select {
  options: {
    id: number;
    value: string;
  }[];
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

const Select: FC<Select> = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className="w-full mt-1 relative">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-transparent text-center p-2 focus:bg-white focus:text-neutral-800 text-white focus:outline-none hover:bg-white transition-colors duration-300 delay-75 hover:text-neutral-800 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 sm:text-sm">
          <span className="block truncate text-4xl md:text-6xl py-1 font-bold">{selectedOption}</span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.value}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select