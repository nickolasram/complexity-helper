import FormattedP from './FormattedP';

let CompDescription = ({symbol, description}) =>{
    return (
        <section className='algorithm-desc'>
            <FormattedP givenText={symbol} symbolBool={true}/>
            <FormattedP givenText={description} />
        </section>
    );
}
export default CompDescription