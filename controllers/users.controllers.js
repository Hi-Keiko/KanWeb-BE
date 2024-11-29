const User = require('../models/user'); // Model user
const bcrypt = require('bcrypt'); // Untuk memverifikasi password

// Fungsi untuk login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Mencari user berdasarkan email
        const user = await User.findOne({ email });

        if (!user) {
            // Jika user tidak ditemukan
            return res.status(404).json({ error: 'Akun tidak terdaftar' });
        }

        // Memverifikasi password yang dimasukkan
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            // Jika password salah
            return res.status(401).json({ error: 'Password salah' });
        }

        // Jika login berhasil
        res.status(200).json({ message: 'Login berhasil', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Terjadi kesalahan pada server' });
    }
};

module.exports = { loginUser };





