import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import useUpdateSetting from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimum_booking_length,
      max_booking_length,
      max_guests_per_bookings,
      breakfast_price,
    } = {},
  } = useSettings();
  const { updateStting, isUpdating } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateStting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minimum_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minimum_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={max_booking_length}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={max_guests_per_bookings}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "max_guests_per_bookings")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfast_price}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfast_price")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
