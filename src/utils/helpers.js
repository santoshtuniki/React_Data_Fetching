export const transformSalary = (salary) => `${(salary / 1000).toFixed(1)}K`;

export const salaryRange = (from, to) => {
    if (from === to) {
        return `${transformSalary(from)}`;
    }
    return `${transformSalary(from)} - ${transformSalary(to)}`;
};

export const splitPara = (para, at = '.') => {
    if (para) {
        return para?.split(at);
    }
    return;
};

export const limitString = (str) => {
    if (str) {
        const modifyStr = str?.split('1.')?.length > 1 ? str?.split('1.')[1] : str;
        return modifyStr?.length > 400 ? `${modifyStr?.split('. ')[0]}...` : `${modifyStr}...`;
    }
    return;
};
