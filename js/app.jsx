/* Clinic home — composes the sections and wires the interactions:
   header CTA → appointment form, form submit → summary modal → WhatsApp message to the clinic. */
function formatDate(iso) {
  const parts = iso.split('-').map(Number);
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
}

function App() {
  const { TopBar, SiteHeader, AppointmentForm, ServiceStrip, Modal, Button } = window.ClinicaDental;
  const [booking, setBooking] = React.useState(null);
  const [formKey, setFormKey] = React.useState(0);

  const goToBooking = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('agendar');
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
    const input = el.querySelector('input');
    if (input) setTimeout(() => input.focus({ preventScroll: true }), 450);
  };

  const closeBooking = () => {
    setBooking(null);
    setFormKey((k) => k + 1);
  };

  const sendBooking = () => {
    const text = [
      'Olá! Gostaria de agendar uma consulta.',
      'Nome: ' + booking.name,
      'Telefone: ' + booking.phone,
      'Data preferida: ' + formatDate(booking.date),
      'Horário preferido: ' + booking.time,
    ].join('\n');
    window.open(WHATSAPP_URL + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    closeBooking();
  };

  return (
    <React.Fragment>
      <TopBar {...CONTACT} />
      <SiteHeader
        brand="Thais Gallina Consultório Odontológico"
        logoSrc="assets/logo/thais-gallina-positivo-compacto.png"
        links={NAV}
        onCtaClick={goToBooking}
        sticky
      />
      <main>
        <Hero />
        <div className="container booking" id="agendar">
          <AppointmentForm key={formKey} onSubmit={setBooking} openingHours={HOURS} />
        </div>
        <About onBook={goToBooking} />
        <ServiceStrip items={STRIP} />
        <Services />
        <Results />
        <Testimonials />
        <Contact onBook={goToBooking} />
      </main>
      <Footer />

      <Modal
        open={!!booking}
        onClose={() => setBooking(null)}
        icon="brand-whatsapp"
        title="Falta só enviar"
        actions={
          <React.Fragment>
            <Button variant="secondary" onClick={() => setBooking(null)}>Alterar dados</Button>
            <Button icon="brand-whatsapp" iconPosition="start" onClick={sendBooking}>Enviar pelo WhatsApp</Button>
          </React.Fragment>
        }
      >
        {booking && (
          <p>
            Seu pedido para <strong>{formatDate(booking.date)}, às {booking.time}</strong> está pronto.
            {' '}Envie a mensagem pelo WhatsApp do consultório; a confirmação do horário chega por lá.
          </p>
        )}
      </Modal>
    </React.Fragment>
  );
}

window.ClinicaDentalReady.then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
});
