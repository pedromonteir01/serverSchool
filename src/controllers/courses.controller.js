export const getCourses = (req, res) => {
    return res.status(200).send({
        message: "Todos os cursos via controller",
        status: "ok"
    })
}

export const getCoursesById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Curso encontrado com ID ${id}`,
        origen: "Controller"
    });
};

export const postCourse = (req, res) => {
    const { name, description, available } = req.body;

    if (!name || !description || !available) {
        return res.status(400).send({
            message: "Dados inválidos"
        });
    }

    return res.status(201).send({
        message: "Curso post via controller",
        origin: "Controller"
    });
};

export const editCOurse = (req, res) => {
    const { id } = req.params;
    const { name, description, available } = req.body;
    console.log(name, description, available);

    if (!name || !description || !available) {
        return res.status(400).send({
            message: "Dados inválidos"
        });
    }

    return res.status(200).send({
        message: `Rota put curso com ID ${id}`,
        origin: "Controller"
    })
};

export const deleteCourse = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `deletado pelo id ${id}`,
        origin: "Controller"
    });
};