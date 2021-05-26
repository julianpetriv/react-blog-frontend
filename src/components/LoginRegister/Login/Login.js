import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Login = ({ setValue, validated, handleSubmit, success, vPhNError,
    loginError, name, count, sendCodeAgain, isValidPhoneNumber, onTokenChange,
    onNameChange, submitActive }) => {
    const { Row, Group, Control } = Form;
    return (
        <Modal centered show={true} size="md">
            <Modal.Body className="pt-5">
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={(event) => handleSubmit(event, success ? "Login" : "vPhN")}
                    className="text-center">
                    <Row>
                        <Group as={Col} md="12">
                            You will get a code to your phone number, enter it please
                        </Group>
                    </Row>
                    <Row>
                        <Group as={Col} md="12" className="mt-4">
                            <PhoneInput
                                required
                                className="form-control"
                                name="phone"
                                defaultCountry="UA"
                                placeholder="Enter your phone number"
                                pattern={isValidPhoneNumber ? "^.+$" : "(?=a)b"}
                                onChange={setValue}
                            />
                        </Group>
                    </Row>
                    {vPhNError && <span style={{ color: 'red' }}>{vPhNError}</span>}
                    <>
                        <Row style={{ visibility: success ? 'visible' : 'hidden' }}>
                            <Group as={Col} md="12">
                                <Control
                                    required={success}
                                    defaultValue={name}
                                    name="name"
                                    type="text"
                                    autoComplete="given-name"
                                    placeholder="Enter your name"
                                    onChange={onNameChange}
                                />
                            </Group>
                        </Row>
                    </>

                    <Row style={{ visibility: success ? 'visible' : 'hidden' }}>
                        <Group as={Col} md="12">
                            <Control
                                required={success ? true : false}
                                type="text"
                                name="token"
                                pattern="[0-9]{6}"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                placeholder="Enter the code"
                                onChange={onTokenChange}
                            />
                        </Group>
                    </Row>
                    {loginError && <span style={{ color: 'red' }}>{loginError}</span>}
                    {!success ? <Row>
                        <Group as={Col} md="12">
                            <span className="proposal-accept">When you register, you agree with the
                                <Link target="_blank" to="/offer"> public offer</Link></span>
                        </Group>
                    </Row> :
                        <Row>
                            <Group as={Col} md="12">
                                <Button
                                    onClick={sendCodeAgain}
                                    disabled={count}
                                    variant="link">
                                    Get code again {count !== 0 ? `in ${count} sec` : null}
                                </Button>
                            </Group>
                        </Row>}
                    <Row>
                        <Group as={Col} md="12" className="mb-0">
                            <Button
                                disabled={!submitActive}
                                variant="primary"
                                type="submit">
                                {success ? "Login!" : "Get code"}
                            </Button>
                        </Group>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default Login;