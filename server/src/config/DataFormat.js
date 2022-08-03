// 2022-04-10

const DataFormat = (format) => {
    const months = [
        "Січ",
        "Лют",
        "Бер",
        "Кві",
        "Тра",
        "Чер",
        "Лип",
        "Сер",
        "Вер",
        "Жов",
        "Лис",
        "Гру",
    ];
    const dd = format.slice(8, 10);
    const mon = months[Number(format.slice(5, 7) - 1)];
    const yyyy = format.slice(0, 4);
    return `${dd} ${mon} ${yyyy}`;
};

module.exports = {
    DataFormat,
};
