import React, { useState } from "react";

export default function RegisterForm() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const { name, phone, message } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ethannguyen/google_sheets/VInjzUmdAxECYikg?tabId=Trang tính1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [new Date().toLocaleDateString("Vi-vi"), name, phone, message],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        phone: "",
        message: "",
      });
      setLoad(false);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.log(error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };
  return (
    <div>
      <div>
        <div className="">
          <div className="h-[100%] w-[100%] relative">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-[13px]">
                  <div className="field-item">
                    <input
                      className="px-[24px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-darkBlue placeholder:font-medium text-darkBlue h-[48px] border border-[#DBDEE7] rounded-[10px]"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ và tên"
                      required
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field-item">
                    <input
                      className="px-[24px]  border border-[#DBDEE7] rounded-[10px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-darkBlue placeholder:font-medium text-darkBlue h-[48px]"
                      id="phone"
                      name="phone"
                      placeholder="Số điện thoại"
                      type="phone"
                      required
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field-item">
                    <textarea
                      className="px-[24px] py-[15px] border border-[#DBDEE7] rounded-[10px] bg-transparent outline-none w-full placeholder:text-sm placeholder:text-darkBlue placeholder:font-medium text-darkBlue resize-none h-[67px]"
                      id="message"
                      name="message"
                      placeholder="Lời nhắn"
                      value={data.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  {load === false ? (
                    <div className="relative inline-block">
                      <button
                        type="submit"
                        className="h-[45px] btn-register inline-flex flex-col items-center justify-center leading-[1] relative z-[10] group uppercase px-[20px] bg-darkBlue text-white text-[14px]"
                      >
                        TƯ VẤN CHO TÔI
                      </button>
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <button
                        type="submit"
                        className="btn-register h-[45px] px-[20px] inline-flex items-center justify-center leading-[1] relative z-[10] bg-darkBlue font-medium text-white text-[14px]"
                      >
                        <svg
                          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>ĐANG GỬI</span>
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
