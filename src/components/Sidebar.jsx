import { Stack } from '@mui/material'
import { categories } from '../utils/constants'



const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack direction='row' sx={{ flexDirection: { md: 'column' }, overflowY: 'auto', height: { sx: 'auto', md: '95%' } }}>
            {
                categories.map((category) => (
                    <button
                        className='category-btn'
                        style={{
                            background: category.name === selectedCategory && '#FC1503',
                            color: (category.name === selectedCategory) ? 'white' : 'black'
                        }}
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <span style={{ marginRight: '15px' }}>{category.icon}</span>
                        <span style={{ opacity: (selectedCategory === category.name) ? '1' : 0.8 }}>{category.name}</span>
                    </button>
                ))
            }
        </Stack>
    )
}

export default Sidebar