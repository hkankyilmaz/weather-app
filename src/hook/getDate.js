import dayjs from "dayjs";

export const getDate = (num) => {
  let currDate = { day: "", dayOfMonth: "", month: "" };

  const days = {
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "Cuma",
    6: "Cumartesi",
    7: "Pazar",
  };

  const monts = {
    1: "Ocak",
    2: "Şubat",
    3: "Mart",
    4: "Nisan",
    5: "Mayıs",
    6: "Haziran",
    7: "Temmuz",
    8: "Ağustos",
    9: "Eylül",
    10: "Ekim",
    11: "Kasım",
    12: "Aralık",
  };

  const currday = dayjs().add(num, "day").day();
  const currmonth = dayjs().month();
  const currdate = dayjs().date();

  return (currDate = {
    day: days[`${currday}`],
    month: monts[`${currmonth + 1}`],
    dayOfMonth: currdate,
  });
};
