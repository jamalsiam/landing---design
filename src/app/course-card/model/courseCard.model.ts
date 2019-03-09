export interface CourseCardVM {
    courseImage: string,
    courseName: string,
    description: string,
    teatherImage: string,
    numberOfVedio: number,
    price: number | null,
    deletedPrice?: number,
    vedioViewed?: number,
    teacherName: string
}