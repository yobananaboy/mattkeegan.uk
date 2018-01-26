exports.get_calculator = (req, res) => {
    res.sendfile('../../../public/calculator/index.html');
};