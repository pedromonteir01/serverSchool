import { Student } from "../models/students/Student";
import { StudentsList } from "../models/students/StudentsList"

const list = new StudentsList();

export const getAllStudents = (req, res) => {
    const students = list.getAllStudent();

    if(!students) {
        return res.status(404).send({
            message: "Nenhum cadastratado",
            staus: "Not found"
        })
    }

    return res.status(200).send({
        message: "Todos alunos via controller",
        status: "ok"
    })
}

export const getStudentById = (req, res) => {
    const { id } = req.params;

    const student = list.getStudentById(id);

    if(!student) {
        return res.status(404).send({
            message: "Nenhum aluno encontrado",
            staus: "Not found",
            origin: "controller"
        })
    }

    return res.status(200).send({
        message: `Aluno com ID ${id}`,
        origen: "Controller"
    });
};

export const postStudent = (req, res) => {
    const {name, email, age} = req.body;

    if(!name || !email || !age) {
        return res.status(400).send({
            message: "Dados inválidos"
        });
    }

    const student = new Student(name, email, age);
    list.addStudent(student);

    return res.status(201).send({
        message: "Aluno post via controller",
        origin: "Controller"
    });
};

export const editStudent = (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;

    if(!name || !email || !age) {
        return res.status(400).send({
            message: "Dados inválidos"
        });
    }

    return res.status(200).send({
        message: `Rota put aluno com ID ${id}`,
        origin: "Controller"
    })
};

export const deleteStuden = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `deletado pelo id ${id}`,
        origin: "Controller"
    });
};