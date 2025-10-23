import './mapping.css'

function Mapping() {
    return (
        <>
            <div className="mp-info md:ml-[10vw] md:mr-[10vw]">
                <div className="mappings">
                    <table className='mx-auto'>
                        <tbody>
                            <tr >
                                <th>Compound</th>
                                <th className='w-[10rem]'>Jamo</th>
                            </tr>
                            <tr>
                                <td>ㅘ</td>
                                <td>['ㅗ', 'ㅏ']</td>
                            </tr>
                            <tr>
                                <td>ㅙ</td>
                                <td>['ㅗ', 'ㅐ']</td>
                            </tr>
                            <tr>
                                <td>ㅚ</td>
                                <td>['ㅗ', 'ㅣ']</td>
                            </tr>
                            <tr>
                                <td>ㅞ</td>
                                <td>['ㅜ', 'ㅔ']</td>
                            </tr>
                            <tr>
                                <td>ㅝ</td>
                                <td>['ㅜ', 'ㅓ']</td>
                            </tr>
                            <tr>
                                <td>ㅟ</td>
                                <td>['ㅜ', 'ㅣ']</td>
                            </tr>
                            <tr>
                                <td>ㅢ</td>
                                <td>['ㅡ', 'ㅣ']</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className='qwerty mappings grid gap-2 text-center font-mono'>
                    {/*Top Row*/}
                    <div className='grid grid-cols-10 gap-2'>
                        <div>Q</div><div>W</div><div>E</div><div>R</div><div>T</div>
                        <div>Y</div><div>U</div><div>I</div><div>O</div><div>P</div>
                    </div>
                    <div className='grid grid-cols-10 gap-2 text-gray-700'>
                        <div>ㅂ</div><div>ㅈ</div><div>ㄷ</div><div>ㄱ</div><div>ㅅ</div>
                        <div>ㅛ</div><div>ㅕ</div><div>ㅑ</div><div>ㅐ</div><div>ㅔ</div>
                    </div>
                    {/*Home Row*/}
                    <div className="grid grid-cols-9 gap-2 text-center font-mono">
                        <div>A</div><div>S</div><div>D</div><div>F</div><div>G</div>
                        <div>H</div><div>J</div><div>K</div><div>L</div>
                    </div>
                    <div className="grid grid-cols-9 gap-2 text-gray-700 text-center font-mono">
                        <div>ㅁ</div><div>ㄴ</div><div>ㅇ</div><div>ㄹ</div><div>ㅎ</div>
                        <div>ㅗ</div><div>ㅓ</div><div>ㅏ</div><div>ㅣ</div>
                    </div>
                    {/*Bottom row*/}
                    <div className="grid grid-cols-7 gap-2 mt-4">
                        <div>Z</div><div>X</div><div>C</div><div>V</div><div>B</div><div>N</div><div>M</div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-gray-700">
                        <div>ㅋ</div><div>ㅌ</div><div>ㅊ</div><div>ㅍ</div><div>ㅠ</div><div>ㅜ</div><div>ㅡ</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mapping